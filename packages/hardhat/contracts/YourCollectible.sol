pragma solidity >=0.6.0 <0.7.0;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import 'base64-sol/base64.sol';

import './HexStrings.sol';
import './ToColor.sol';
//learn more: https://docs.openzeppelin.com/contracts/3.x/erc721

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

contract YourCollectible is ERC721, Ownable {

  using Strings for uint256;
  using HexStrings for uint160;
  using ToColor for bytes3;
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  string[] private scriptures = [
        "Blessed are the poor in spirt",
        "Blessed are those who mourn",
        "Blessed are the meek",
        "Blessed are those who hunger and thirst for righteousness",
        "Blessed are the merciful",
        "Blessed are the pure in heart",
        "Blessed are the peacemakers",
        "Blessed are those who are persecuted because of righteousness"
    ];

  constructor() public ERC721("Cross Bearer", "ONCHAINCROSS") {
    // RELEASE THE LOOGIES!
  }

  mapping (uint256 => bytes3) public color;
  mapping (uint256 => bytes3) public bgColor;
  mapping (uint256 => uint256) public chubbiness;
  mapping (uint256 => string) public scripture;

  uint256 mintDeadline = block.timestamp + 24 hours;

  function mintItem()
      public
      returns (uint256)
  {
      _tokenIds.increment();

      uint256 id = _tokenIds.current();

      require(id < 144000, "Minting is complete");

      //emd
//      require(msg.value > 1, "Need to pay some Eth");

      _mint(msg.sender, id);

      bytes32 predictableRandom = keccak256(abi.encodePacked( blockhash(block.number-1), msg.sender, address(this) ));
      color[id] = bytes2(predictableRandom[0]) | ( bytes2(predictableRandom[1]) >> 8 ) | ( bytes3(predictableRandom[2]) >> 16 );
      // set a contrasting background color
      bgColor[id] = ( bytes1(uint8(255-uint8(predictableRandom[0]))) ^ 0xFF                       ) | 
                    ( bytes2((bytes2(uint16(255-uint8(predictableRandom[0]))) >> 8) ^ 0xFFFF)      ) | 
                    ( bytes3((bytes3(uint24(255-uint8(predictableRandom[0]))) >> 16) )  ^ 0xFFFFFF ) ;
      chubbiness[id] = 35+((55*uint256(uint8(predictableRandom[3])))/255);

      scripture[id] = getScripture(id);

      return id;
  }

  function random(string memory input) internal pure returns (uint256) {
      return uint256(keccak256(abi.encodePacked(input)));
  }

  function getScripture(uint256 id) public view returns (string memory) {
    return pluck(id, "cross-bearer", scriptures);
  }

  function pluck(uint256 tokenId, string memory keyPrefix, string[] memory sourceArray) internal pure returns (string memory) {
        uint256 rand = random(string(abi.encodePacked(keyPrefix, uint2str(tokenId))));
        string memory output = sourceArray[rand % sourceArray.length];
        return output;
  }

  function tokenURI(uint256 id) public view override returns (string memory) {
    require(_exists(id), "not exist");
    string memory name = string(abi.encodePacked('cross-bearer ',id.toString()));
    string memory description = string(abi.encodePacked('color #',color[id].toColor(),' bg of ',bgColor[id].toColor(), '!!' ) );
    string memory image = Base64.encode(bytes(generateSVGofTokenById(id)));

    return
      string(
          abi.encodePacked(
            'data:application/json;base64,',
            Base64.encode(
                bytes(
                      abi.encodePacked(
                          '{"name":"',
                          name,
                          //'", "description":"',
                          //description,
                          //'", "external_url":"https://burnyboys.com/token/',
                          //id.toString(),
                          '", "attributes": [{"trait_type": "color", "value": "#',
                          color[id].toColor(),
                          '"}], "owner":"',
                          (uint160(ownerOf(id))).toHexString(20),
                          '", "image": "',
                          'data:image/svg+xml;base64,',
                          image,
                          '"}'
                      )
                    )
                )
          )
      );
  }

  function generateSVGofTokenById(uint256 id) internal view returns (string memory) {
    string memory svg = string(abi.encodePacked(
      '<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">',
        renderCrossToken(id),
      '</svg>'
    ));

    return svg;
  }

  function renderCrossToken(uint256 id) public view returns (string memory) {
    string memory render = string(abi.encodePacked(
      '<rect x="0" y="0" width="400" height="400" style="fill:#',
      bgColor[id].toColor(),
      '"/>',
      '<rect x="196" y="90" width="14" height="176" style="fill:#',
      color[id].toColor(),
      '"/>',
      '<rect x="150" y="143" width="102" height="14" style="fill:#',
      color[id].toColor(),
      '"/>',
      '<text x="50%" y="10%" dominant-baseline="middle" text-anchor="middle">',
      scripture[id],
      '</text>'
    ));

    return render;
  }

  function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
      if (_i == 0) {
          return "0";
      }
      uint j = _i;
      uint len;
      while (j != 0) {
          len++;
          j /= 10;
      }
      bytes memory bstr = new bytes(len);
      uint k = len;
      while (_i != 0) {
          k = k-1;
          uint8 temp = (48 + uint8(_i - _i / 10 * 10));
          bytes1 b1 = bytes1(temp);
          bstr[k] = b1;
          _i /= 10;
      }
      return string(bstr);
  }
}

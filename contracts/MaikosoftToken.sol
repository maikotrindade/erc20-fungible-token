// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MaikoSoftToken is ERC20 {
    constructor() ERC20("MaikosoftToken", "MSTN"){
        // Minting tokens emits a Transfer() event with the 0 address as the source
        _mint(msg.sender, 1000000000000000000000000);
    }
}
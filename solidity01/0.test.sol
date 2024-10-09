// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract Test {
    

  
    function MyOwner() external view  returns (address add){
       return msg.sender;
    }

}

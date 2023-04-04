import React, { useContext } from "react";
import { WalletContext } from "../contexts/WalletContext";

const NftCard = ({ msg }) => {
  
  return (
    <div class="bubbleWrapper">
      <div class="inlineContainer">
        <div class="otherBubble other">
          {msg.content && (
            <>
              <a href={msg.content.slice(5, msg.content.length)} target="_blank">
                <img src={msg.content.slice(5, msg.content.length)} height="100px" width="100px" />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NftCard;
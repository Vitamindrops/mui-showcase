import React from "react";

function WinningDraw({ winningNumbers, selectedNumbers, showIndex }) {
	function isSelected(number) {
		return selectedNumbers?.includes(number);
	}

	return (
		<div>
            <h2 className="text-center my-4">Winning draw</h2>
            <div className="colWinDraw">
                <div className="column"></div>
                {winningNumbers?.map((num, index) => {
                    return (
                        <div key={index} style={{opacity: showIndex >= index + 1 ? "1" : "0", transition: "1s"}}>
                            <div
                                className={`bg-${
                                    isSelected(num) ? "danger" : "warning"
                                } WinlotteryBall`}
                            >
                                <div className="redWinBall">{num}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
	);
}
export default WinningDraw;
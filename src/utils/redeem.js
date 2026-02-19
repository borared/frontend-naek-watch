export function redeemItem(userPoints, itemPoints) {
  if (userPoints < itemPoints) {
    return {
      success: false,
      message: "You don't have enough points to redeem this item.",
      remainingPoints: userPoints,
    };
  }

  return {
    success: true,
    message: "Item redeemed successfully! 🎉",
    remainingPoints: userPoints - itemPoints,
  };
}

export default class Random {
  public static generate(byteLength: number = 4): string {
    if (byteLength < 0) {
      byteLength = 4
    }
    if (byteLength > 1) {
      const random =
        this.generate(byteLength - 1) +
        Math.random()
          .toString(36)
          .substring(2, 10)
      return random
    } else {
      return Math.random()
        .toString(36)
        .substring(2, 10)
    }
  }
}

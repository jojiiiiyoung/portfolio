class EnvChecker {
  public static isDev(): boolean {
    return process.env.NODE_ENV === "development";
  }

  public static isProduction(): boolean {
    return process.env.NODE_ENV === "production";
  }
}

export default EnvChecker;

class Config {
  public CLOUD_NAME: string | undefined;
  public CLOUD_API_KEY: string | undefined;
  public CLOUD_API_SECRET: string | undefined;
  public LOCAL_URL: string | undefined;

  constructor() {
    this.CLOUD_NAME = process.env.CLOUD_NAME || "floodscape";
    this.CLOUD_API_KEY = process.env.CLOUD_API_KEY || "744247193913167";
    this.CLOUD_API_SECRET =
      process.env.CLOUD_API_SECRET || "PY2M29Nwq8JW8Wu7quwzR3haqOU";
    this.LOCAL_URL = process.env.LOCAL_URL || "";
  }
}

export const config: Config = new Config();

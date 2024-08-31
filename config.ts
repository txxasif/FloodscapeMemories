class Config {
  public CLOUD_NAME: string | undefined;
  public CLOUD_API_KEY: string | undefined;
  public CLOUD_API_SECRET: string | undefined;
  public LOCAL_URL: string | undefined;

  constructor() {
    this.CLOUD_NAME = process.env.CLOUD_NAME || "";
    this.CLOUD_API_KEY = process.env.CLOUD_API_KEY || "";
    this.CLOUD_API_SECRET = process.env.CLOUD_API_SECRET || "";
    this.LOCAL_URL = process.env.LOCAL_URL || "";
    console.log(
      this.CLOUD_NAME,
      this.CLOUD_API_KEY,
      this.CLOUD_API_SECRET,
      this.LOCAL_URL
    );
  }

  // public cloudinaryConfig(): void {
  //   cloudinary.v2.config({
  //     cloud_name: this.CLOUD_NAME,
  //     api_key: this.CLOUD_API_KEY,
  //     api_secret: this.CLOUD_API_SECRET,
  //   });
  // }
}

export const config: Config = new Config();

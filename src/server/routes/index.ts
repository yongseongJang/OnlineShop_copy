import { Application } from "express";
import { UserRouter, ProductRouter, CartRouter, OrderRouter } from "./api";

class ApiRouter {
  private static instance: ApiRouter;
  private app!: Application;

  private constructor() {}

  public static getInstance(): ApiRouter {
    if (!this.instance) {
      this.instance = new ApiRouter();
    }

    return this.instance;
  }

  public init(app: Application): void {
    this.app = app;
    this.app.use("/api/users", UserRouter.getInstance().getRouter());
    this.app.use("/api/products", ProductRouter.getInstance().getRouter());
    this.app.use("/api/carts", CartRouter.getInstance().getRouter());
    this.app.use("/api/orders", OrderRouter.getInstance().getRouter());
  }
}

export default ApiRouter;

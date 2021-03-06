import { Router } from "express";
import { UserController } from "../controllers";
import authentication from "../middlewares/authentication";

class UserRouter {
  private static instance: UserRouter;
  private router: Router;
  private userController: UserController;

  private constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  public static getInstance(): UserRouter {
    if (!this.instance) {
      this.instance = new UserRouter();
    }

    return this.instance;
  }

  private initializeRoutes(): void {
    this.router.post("/login", this.userController.login);

    this.router.post("/", this.userController.registerUser);

    this.router.get(
      "/shipping",
      authentication,
      this.userController.readShippingInfoByPrimaryKey,
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default UserRouter;

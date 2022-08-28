import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { Auth } from "../auth/decorators/auth.decorator";
import { CurrentUser } from "./user.decorator";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get("profile")
    @Auth()
    async getProfile(@CurrentUser('id') id: number) {
        return this.userService.byId(id);
    };
}

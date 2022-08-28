import { JwtModuleOptions } from "@nestjs/jwt";
import { JWT_SECRET } from "./environment.config";

export const getJwtConfig = (): JwtModuleOptions => ({
    secret: JWT_SECRET,
});
import { ApiModel, ApiModelProperty, SwaggerDefinitionConstant } from "swagger-express-ts";

@ApiModel({
    description: "User Add",
    name: "ReqVerifyOtp"
})

export class ReqVerifyOtpModel {
    @ApiModelProperty({
        description: "countryCode",
        required: true,
        type: SwaggerDefinitionConstant.STRING,
        example: '+1' as any
    })
    countryCode: string;
    @ApiModelProperty({
        description: "phone no of user",
        required: true,
        type: SwaggerDefinitionConstant.STRING,
        example: '12345678' as any
    })
    phoneNo: string;
    @ApiModelProperty({
        description: "otp",
        required: true,
        type: SwaggerDefinitionConstant.STRING,
        example: '1234' as any
    })
    otp: string;
    @ApiModelProperty({
        description: "password",
        required: true,
        type: SwaggerDefinitionConstant.OBJECT,
        example: { platform: "ios", token: "devicetoken" } as any
    })
    device: object;

}
import {useEffect, useState} from "react";
import {Auth} from "@/app/service/auth";
import {isDigit, isLowerCase, isSpecialCharacter, isUpperCase} from "@/utils/password-utils";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {Progress} from "@/components/ui/progress";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {IoLogoApple, IoLogoGoogle} from "react-icons/io";
import {ImCheckboxUnchecked, ImFacebook} from "react-icons/im";
import {IoCheckbox} from "react-icons/io5";

export function SignUpCard() {
    const [openTipTool, setOpenTipTool] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [passwordStrength, setPasswordStrength] = useState<number>(0);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(checkPasswordStrength, [password])

    function handelSignUp() {
        Auth().createAccount(email, password, confirmPassword);
    }

    function checkPasswordStrength() {
        let strength = 0;

        if (isUpperCase(password)) {
            strength += 20;
        }

        if (isLowerCase(password)) {
            strength += 20;
        }

        if (isDigit(password)) {
            strength += 20;
        }

        if (isSpecialCharacter(password)) {
            strength += 20;
        }

        if (password.length >= 8) {
            strength += 20
        }

        setPasswordStrength(strength);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>
                    Get started with the most powerful erp and
                    boost your business.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className={"flex flex-col gap-3"}>
                    <div className={"flex flex-col gap-1"}>
                        <Label>Email</Label>
                        <Input onChange={(value) => setEmail(value.target.value)}
                               placeholder={"admin@advpack.com"}></Input>
                    </div>
                    <div className={"flex flex-col gap-1"}>
                        <Label>Password</Label>
                        <HoverCard open={openTipTool}>
                            <HoverCardTrigger>
                                <Input type={
                                    showPassword ? "text" : "password"
                                }
                                       onFocus={event => {
                                           setOpenTipTool(true);
                                       }}
                                       onBlur={() => setOpenTipTool(false)}
                                       onChange={(value) => setPassword(value.target.value)}
                                ></Input>
                            </HoverCardTrigger>
                            <HoverCardContent align={"end"} alignOffset={-320}
                                              className={"translate-y-[-37px] translate-x-2 w-[300px]"}>
                                <PasswordHoverCard password={password}></PasswordHoverCard>
                            </HoverCardContent>
                        </HoverCard>
                        {
                            password === "" ? <></> : <div className={"flex flex-col w-[100%]"}>
                                <Progress value={passwordStrength} className={"h-1"}></Progress>
                            </div>
                        }
                    </div>
                    <div className={"flex flex-col gap-1"}>
                        <Label>Confirm Password</Label>
                        <Input onChange={(value) => setConfirmPassword(value.target.value)}
                               type={showPassword ? "text" : "password"}></Input>
                    </div>
                    <div className={"flex justify-end gap-2"}>
                        <Button variant={"link"} className={"p-0 h-4 mt-1"}
                                onClick={() => {
                                    setShowPassword(!showPassword);
                                }}
                        >
                            {
                                showPassword ? "Hide Password" : "Show Password"
                            }
                        </Button>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <div className={"flex flex-col w-[100%] justify-center items-center"}>
                    <Button className={"w-[120px]"}
                            onClick={handelSignUp}
                    >Sign Up</Button>
                    <Separator className={"my-4"}></Separator>
                    <div className={"flex gap-2 w-[100%] justify-between"}>
                        <Button variant={"secondary"} className={"gap-2 w-[120px]"}>
                            <IoLogoGoogle></IoLogoGoogle>
                        </Button>
                        <Button variant={"secondary"} className={"gap-2 w-[120px]"}>
                            <ImFacebook></ImFacebook>
                        </Button>
                        <Button variant={"secondary"} className={"gap-2 w-[120px]"}>
                            <IoLogoApple></IoLogoApple>
                        </Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export function PasswordHoverCard(props: any) {
    return (
        <div className={"flex flex-col z-40"}>
            <p className={"text-sm"}>Password Requirements</p>
            <div className={"flex flex-col gap-1 mt-3"}>
                <div className={"flex gap-2 items-center"}>
                    {
                        props.password.length >= 8 ? <IoCheckbox/> : <ImCheckboxUnchecked/>
                    }
                    <p className={"text-sm"}>Should be 8 characters long</p>
                </div>
                <div className={"flex gap-2 items-center"}>
                    {
                        isUpperCase(props.password) ? <IoCheckbox/> : <ImCheckboxUnchecked/>
                    }
                    <p className={"text-sm"}>Contains Uppercase letters</p>
                </div>
                <div className={"flex gap-2 items-center"}>
                    {
                        isLowerCase(props.password) ? <IoCheckbox/> : <ImCheckboxUnchecked/>
                    }
                    <p className={"text-sm"}>Contains lowercase letters</p>
                </div>
                <div className={"flex gap-2 items-center"}>
                    {
                        isDigit(props.password) ? <IoCheckbox/> : <ImCheckboxUnchecked/>
                    }
                    <p className={"text-sm"}>Contains a number</p>
                </div>
                <div className={"flex gap-2 items-center"}>
                    {
                        isSpecialCharacter(props.password) ? <IoCheckbox/> :
                            <ImCheckboxUnchecked/>
                    }
                    <p className={"text-sm"}>Contains a special character</p>
                </div>
            </div>
        </div>
    );
}

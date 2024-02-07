import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {IoLogoApple, IoLogoGoogle} from "react-icons/io";
import {ImFacebook} from "react-icons/im";
import {useState} from "react";
import {Auth} from "@/app/service/auth";
import {useRouter} from "next/navigation";
import {StorageService} from "@/utils/local-storage-service";

export function LoginCard() {

    const [showPassword, setShowPassword] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigation = useRouter();

    return (
        <Card className={"w-[465px]"}>
            <CardHeader>
                <CardTitle>
                    Welcome Back.
                </CardTitle>
                <CardDescription>
                    Login and resume your work right away.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className={"flex flex-col gap-3"}>
                    <div className={"flex flex-col gap-1"}>
                        <Label>Email</Label>
                        <Input
                            onChange={(value) => setEmail(value.target.value)}
                            placeholder={"admin@gmail.com"}></Input>
                    </div>
                    <div className={"flex flex-col gap-1"}>
                        <Label>Password</Label>
                        <Input
                            onChange={(value) => setPassword(value.target.value)}
                            type={showPassword ? "password" : "text"}></Input>
                    </div>
                    <div className={"flex justify-end"}>
                        <Button variant={"link"} className={"px-0 h-2"}
                                onClick={() => {
                                    setShowPassword(!showPassword);
                                }}
                        >
                            {
                                showPassword ? "Show Password" : "Hide Password"
                            }
                        </Button>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <div className={"flex flex-col w-[100%] justify-center items-center"}>
                    <Button className={"w-[120px]"}
                            onClick={async () => {
                                await Auth().loginEmail(email, password).then((value) => {
                                    StorageService().saveToLocalStorage("user", value);
                                    navigation.push('/erp/company');
                                });

                            }}
                    >Login</Button>
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
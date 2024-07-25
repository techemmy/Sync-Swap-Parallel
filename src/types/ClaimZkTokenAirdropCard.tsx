import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"

export default function ClaimZkTokenAirdropCard() {
    return (
        <Link to="https://claim.zknation.io/">
            <Card className="mt-5 shadow-md rounded-3xl border-0 cursor-pointer hover:opacity-75 bg-white/70 relative overflow-clip">
                <CardContent className="p-5 px-5 text-center">
                    <CardTitle className="font-semibold text-lg">ZKsync Token Launch</CardTitle>
                    <CardDescription>Check and claim your ZK airdrop today</CardDescription>
                </CardContent>
                <img className="absolute z-[-1] border-[50%] w-28 -right-2 -top-2 opacity-45" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAAAAACIM/FCAAAFgUlEQVR42u3csWojPRAH8CmE3yAQ8iJXpgmkSpU2r2ICae8N8gzGwectXN6TpHS5aIZdiTT+f5wMpyJkWEur2Hw3A6kCG37Z0WpG0i7J/yTIIAYxiEEMYhCDGMQgBjGIQQxiEIMYxCAGMYhBDGIQgxjEIAYxiEEMYhCDGMQgBjGIQQxiEIOUBTe4xBkgnH7qL2GQuSASDkMtZDgEOSuEWSRi3w9SFUO/RxRhPheEe5GAn4/xow7yER9/Ioj0fC6I+ICOfiDWQSJ+UIfg5VwQ4RErosd6yCPRCiPLuSAj3mguCL1hPAeEe06O+SBJwj1/N0T68Mfh5oK4P5LQSwuIHkfHfJCj5LtTiyVi5cg5mgmSJG6FKPyNEM8+YkMpZoOk2CB69t8G4T5iReTmhjiiFWLP3weJ+EXk5oc4ol+IZZDC8UFEbjE3ZOGIKI+TtpBeJGLjKMV8kBxugyjSt4aw+JRX7SApu7xwO0iuSxyRawVxRC5VKy0hLMIhjfOWkDTiA4twK4j3wmkepLapRWlmZPG+FqL3H+RaQxzl/qRNaoU0D7aHpJkxNEqtPM7bQ5QRXw3xMqT+43M84YQQViE5Un8yiJ8bwszx2H98itvfu25ivK5lnAhJVX1k5tnvyNHhqCYW24NMhRwlxXdE7z8W9ClOkd2+Y5gGSWqlPymDsBcO2FB5uHQnl4DnKZAcGwQWzwUQpf+odFx32TEVovQnZZCQ+48iCBHd7RGTYyIk9ydhLghzuh91A/0lP3lPgqR7wlwHyf3HW1VeEd10gKgQJd4m9Sc0ob6qdtzvMbA+s6uSKXUXTVsXXbgKyxJgkUKIW+TV1GII899xXg653uGgJ0bAkwL5O+KZSyHMLCPW5QY6plUQNXrggZx+nTVGYeZSyMCp/6DKtGLWxiADL4msRofAQylEOGBN1DSteMD+Tv8bx9+uEcpSi9M43zpyVAxJk6Cwspfrge5aceQ+3m3TiOdTISyDjOV1SdIvga//tOdBvAeWNDVWGGUQPhnCaZ3alUJSbdWLsLIiE/F+f8IVN4h8MkR8Hh+lT6votUcm+wN2V9P+VXmceDkNwhKwchlSUlsx6/cjp9VUiFshCE+HcC8yYFNRsl91gNeGpnDA/p5Ojg0GkZ6nQth/YE2FkMUxrVgtGPwB2xsqiDU+PPP01MK2NK0c0TMgavQeeCZyJQXoFieMkYDX8vrqZoeD15KKZUyT4MIVpe0rQnOIW6RJcBTNIf0Bu5xWRZCWqZXTyvd6g5PTqji1mg/2m21KKxb9aZXTqnCwt338prQKrO6uMNBd5bQtffw2nhCXgD4HigAvpETthFhfojiiqx0OntXJI6a0Ui5ZX6LUF40P74j6/eiB7TUpbUFd0VhfxudOUAb2X94PAZaUEAqkvIyvb6ycS53gcXiwsqi0vyMlihur+lY3O9IkqEYP7K5LHbnVbbn44FLJLl67Dk/vBPXFh5bLQY4eAC9qhIKnlbIc1GqB7glB35M4oKtJq7xA13jJVN/VZQaWxbcjL5m2X8TWIVxQsiuL2M22FXQICwPdTUVtlbcVGm/06BBfUFspGz3ttt50CPuI/W3BTK5svbXZDNUh7CvTKm+GNtue1iHZ8UxVjrw93fbAgA4Z8H5L08MpBwZaH+HQIYftgsojH+Fof6hGh4yyfu0mxu73rXKopvkxJx3CghPi6etjTnbw7KKOAtrhzEs7LmsHmC/oSLkd8r+01y7sRZhLejXJXha7tNf37IXKi3rF1V46vrTXwO3FfPtUQoOPV9jnROwDL7N/cse+5mSQNh8Ks0+3GcQgBjGIQQxiEIMYxCAGMYhBDGIQgxjEIAYxiEEMYhCDGMQgBjGIQQxiEIMYxCAGMYhBDPKPQ/4DyIHLQ1NXxEgAAAAASUVORK5CYII=" />
            </Card>
        </Link>
    )
}


import Button from "@/components/Micro/Button";
import React from "react";
import { MdSend } from "react-icons/md";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";
import useChat from "@/lib/hooks/useChat";

const Chat = () => {
    const [user] = useAuthState(auth);

    const { loading, prompt, send, setPrompt, messages, error } = useChat();

    return (
        <main className="bg-[url('/Welcome.svg')] bg-cover h-screen overflow-hidden">
            <div className="bg-black/50 h-screen w-screen overflow-hidden">
                <div className="w-full ">
                    Navbar should be here with logout feature
                </div>
                <div className="flex flex-col h-screen overflow-hidden  container mx-auto ">
                    <div
                        id="messages"
                        className="flex-grow overflow-y-auto w-full flex space-y-2 flex-col py-10"
                    >
                        {messages.map((msg, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex flex-col  text-white"
                                >
                                    <div className="flex items-center  space-x-2">
                                        {msg.role === "user" ? (
                                            <>
                                                <Image
                                                    src={user?.photoURL || ""}
                                                    width={30}
                                                    height={30}
                                                    className="rounded-full"
                                                    alt="Profile"
                                                />
                                                <span className="font-semibold">
                                                    {user
                                                        ? user.displayName
                                                        : "You"}
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <Image
                                                    src={"/santa-pic.svg"}
                                                    width={30}
                                                    height={30}
                                                    className="rounded-full -scale-x-100 border border-white"
                                                    alt="Profile"
                                                />
                                                <span className="font-semibold">
                                                    Santa Claus
                                                </span>
                                            </>
                                        )}
                                    </div>
                                    <div className="pl-10">
                                        {(msg.content as string) || ""}
                                    </div>
                                </div>
                            );
                        })}
                        {loading ? (
                            <div className="flex items-center space-x-2 text-white">
                                <Image
                                    src={"/santa-pic.svg"}
                                    width={30}
                                    height={30}
                                    className="rounded-full -scale-x-100 border border-white"
                                    alt="Profile"
                                />
                                <span className="font-semibold">
                                    Santa Claus is replying you...
                                </span>
                            </div>
                        ) : null}
                        {error ? (
                            <div className="flex items-center space-x-2 text-white w-full flex-col justify-center space-y-2 text-center">
                                <p className="font-semibold text-center">
                                    An error occurred.
                                </p>
                                <Button onClick={send}>Try Again</Button>
                            </div>
                        ) : null}
                    </div>

                    <div className="py-5 relative">
                        <textarea
                            disabled={loading}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="resize-none p-5 w-full rounded-xl border-none outline-none"
                            rows={2}
                            placeholder={
                                loading ? "Loading..." : "Chat with Santa Claus"
                            }
                        ></textarea>
                        <button
                            disabled={loading}
                            onClick={send}
                            className="absolute bg-blue-500 p-4 text-white bg-opacity-50 hover:bg-opacity-100 rounded-full right-5 top-1/2 -translate-y-1/2"
                        >
                            <MdSend />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Chat;

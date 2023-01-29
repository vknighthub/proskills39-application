import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: "1025777977822-169v8ffm9vi1jcn8b7hlbiq34l7qjd8t.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
});
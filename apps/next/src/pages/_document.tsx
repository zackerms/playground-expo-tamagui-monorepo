import NextDocument, {DocumentContext, Head, Html, Main, NextScript} from "next/document";
import {tamaguiConfig} from "@my-app/ui/tamagui.config";

export default class Document extends NextDocument {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await NextDocument.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <style
                        dangerouslySetInnerHTML={{
                            __html: tamaguiConfig.getCSS(),
                        }}
                    />
                </>
            ),
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
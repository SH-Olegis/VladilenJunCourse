import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { toast } from "react-toastify";

const init = () => {
    Sentry.init({
        dsn: "https://7ce5582bc4154ceb97cccd6909171da2@o1290995.ingest.sentry.io/6512477",
        integrations: [new BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}

const log = (error) => {
    Sentry.captureException(error)
    toast.error("Something was wrong. Try again later")
}

const logger = {
    log,
    init
}

export default logger

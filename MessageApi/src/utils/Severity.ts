type Severity = "error" | "success" | "info" | "warning" | undefined;

const Error: Severity = "error";
const Success: Severity = "success";
const Info: Severity = "info";
const Warning: Severity = "warning";

export const AlertSeverityKeys = {
    0: Error,
    1: Warning,
    2: Success,
    3: Info
}

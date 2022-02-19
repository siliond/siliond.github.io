function solution(queryType, query) {
    let result = new Map();
    let final = [];
    let addToKey = 0;

    for (let i = 0; i < queryType.length; i++) {
        const [op, params] = [queryType[i], query[i]];

        switch (op) {
            case "insert":
                result[params[0]] = params[1];
                break;

            case "get":
                final.push(result[params[0] - addToKey]);
                break;

            case "addToKey":
                // if (Object.keys(result).length > 0)
                //     addToKey += params[0];
                for (const prop in result) {
                    result[parseInt(prop) + params[0]] = result[prop];
                    result.delete(prop);
                }
                break;

            case "addToValue":
                for (const prop in result) {
                    result[prop] += params[0];
                }
                break;
        }

        console.log(
            `op: ${op}
            params: ${params}
            result: ${JSON. stringify(result)}
            final: ${final}
            addToKey: ${addToKey}`);
    }
    console.log(final);
    return final.reduce((prev, curr) => prev + curr, 0);
}
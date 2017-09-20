# simplecrawler-cookie-probs
Show problems with cookies and [simplecrawler](https://github.com/simplecrawler/simplecrawler).
To see the fixed version checkout the [fixed branch](../../tree/fixed).

## Description
There are two problems with cookie handling in simplecrawler
1. Too much information is sent in the outbound `Cookie:` header
2. Node versions less than 8 don't properly handle multiple cookies passed as an array in `requestOptions.headers.cookie`.

## Quickstart

```
clone https://github.com/HaroldPutman/simplecrawler-cookie-probs
cd simplecrawler-cookie-probs
npm install
npm start
```

## Output
Using simplecrawler version 1.1.5 you get the following output:

### Node.js v7.10.1
```
Fetched https://httpbin.org/cookies {
  "cookies": {
    "Domain": "*",
    "name3": "value3"
  }
}
```

### Node.js v8.5.0
```
Fetched https://httpbin.org/cookies {
  "cookies": {
    "; name2": "value2",
    "; name3": "value3",
    "Domain": "*",
    "name1": "value1"
  }
}
```

### Expected Output
```
Fetched https://httpbin.org/cookies {
  "cookies": {
    "name1": "value1",
    "name2": "value2",
    "name3": "value3"
  }
}
```

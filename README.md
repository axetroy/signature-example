## 一个数据签名的例子

### 工作原理

[![Workflow](workflow.jpg)](workflow.jpg)

### 数据签名

```bash
curl -H "Content-Type:application/json" -X POST -d '{"amount": "1.00", "to":"user_id"}' http://127.0.0.1:3000/signature
```

### 携带数据签名请求

```bash
curl -H "X-Signature:Zjk4YTE5OTQ4MjZiNDM5MzYwOTE1NzdjYjQ2NmMyMmZmMTNjZmIzNDg1MjIxMTM0ZGVlZDI3ZGMzMGFjZmFlMw==" -H "Content-Type:application/json" -X POST -d '{"amount": "1.00", "to":"user_id"}' http://127.0.0.1:3000/transfer
```

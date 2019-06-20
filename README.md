## 一个数据签名的例子

### 工作原理

[![Workflow](workflow.jpg)](workflow.jpg)

### 数据签名

```bash
curl -X POST -d '{"amount": "1.00", "to":"user_id"}' http://127.0.0.1:3000/signature
```

### 携带数据签名请求

```bash
curl -H "X-Signature:NWY4NWY3NzBmZWVjZTNiNTRkYTU3ZDc0MmZiMGExZWZhMDVlODM4NDdkNDY3YTE2NDczNDI0NGRkMmJlMWZkOA==" -H "Content-Type:application/json" -X POST -d '{"amount": "1.00", "to":"user_id"}' http://127.0.0.1:3000/transfer
```

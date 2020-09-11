[< Return to Summary](summary.md) | File Generated: Fri Sep 11 2020 10:34:27 GMT+0000 (Coordinated Universal Time)

# common-error-conditions >> not-found (Multiple)

Feature Implemented: true

Runs Order Cancellation for an non-existent Order (with a fictional UUID), expecting an NotFoundError error to be returned

---

✅ 1 passed with 0 failures, 0 warnings and 0 suggestions 

---


## Delete Order

### delete-order Request
DELETE https://localhost:5001/api/openbooking/orders/c9798a83-6c7c-56e0-93dc-fe0db978c6ac

---

Response status code: 404 Not Found. Responded in 32.608238ms
```json
{
  "@context": "https://openactive.io/",
  "@type": "NotFoundError",
  "name": "The Booking System does not have the generic resource specified.",
  "statusCode": 404
}
```
### Specs
* ✅ should return a NotFoundError



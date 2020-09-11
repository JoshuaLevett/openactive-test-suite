[< Return to Summary](summary.md) | File Generated: Fri Sep 11 2020 10:34:59 GMT+0000 (Coordinated Universal Time)

# common-error-conditions >> not-found (Multiple)

Feature Implemented: true

Runs Order Cancellation for an non-existent Order (with a fictional UUID), expecting an NotFoundError error to be returned

---

✅ 1 passed with 0 failures, 0 warnings and 0 suggestions 

---


## Delete Order

### delete-order Request
DELETE https://localhost:5001/api/openbooking/orders/84610e6e-fe86-530a-904d-e9551d4db52d

---

Response status code: 404 Not Found. Responded in 18.363663ms
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



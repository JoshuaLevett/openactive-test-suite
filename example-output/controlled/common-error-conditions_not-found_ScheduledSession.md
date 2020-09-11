[< Return to Summary](summary.md) | File Generated: Fri Sep 11 2020 10:34:59 GMT+0000 (Coordinated Universal Time)

# common-error-conditions >> not-found (ScheduledSession)

Feature Implemented: true

Runs Order Cancellation for an non-existent Order (with a fictional UUID), expecting an NotFoundError error to be returned

---

✅ 1 passed with 0 failures, 0 warnings and 0 suggestions 

---


## Delete Order

### delete-order Request
DELETE https://localhost:5001/api/openbooking/orders/bb23fe51-a348-5292-a8e8-3bf999391710

---

Response status code: 404 Not Found. Responded in 64.107094ms
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



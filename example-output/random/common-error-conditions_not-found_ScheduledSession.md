[< Return to Summary](summary.md) | File Generated: Fri Sep 11 2020 10:34:27 GMT+0000 (Coordinated Universal Time)

# common-error-conditions >> not-found (ScheduledSession)

Feature Implemented: true

Runs Order Cancellation for an non-existent Order (with a fictional UUID), expecting an NotFoundError error to be returned

---

✅ 1 passed with 0 failures, 0 warnings and 0 suggestions 

---


## Delete Order

### delete-order Request
DELETE https://localhost:5001/api/openbooking/orders/2705ebde-8560-510b-87d6-d70325ad0bc4

---

Response status code: 404 Not Found. Responded in 88.74098ms
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



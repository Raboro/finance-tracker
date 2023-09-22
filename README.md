# Finance Tracker

![FT](app/assets/readmeIcon.png)

[![CI](https://github.com/Raboro/finance-tracker/actions/workflows/ci.yml/badge.svg)](https://github.com/Raboro/finance-tracker/actions/workflows/ci.yml)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Raboro_finance-tracker&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Raboro_finance-tracker)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Raboro_finance-tracker&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Raboro_finance-tracker)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Raboro_finance-tracker&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=Raboro_finance-tracker)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Raboro_finance-tracker&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=Raboro_finance-tracker)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Raboro_finance-tracker&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Raboro_finance-tracker)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Raboro_finance-tracker&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Raboro_finance-tracker)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Raboro_finance-tracker&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=Raboro_finance-tracker)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Raboro_finance-tracker&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Raboro_finance-tracker)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Raboro_finance-tracker&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=Raboro_finance-tracker)


Finance Tracker Mobile App so you can track you finances. Uses Local Storage to store your data, so no data is collected from you.

## Using

Go the the [website](https://expo.dev/@raboro/financetracker) and scan the QR Code.

### Locally
1. Clone the repo
2. Install all dependencies: ``npm install``
3. Run ``npm start`` 
4. Scan QR Code 

## Update
Run ``eas update`` to upload the newest changes to expo.

## Documentation

By entering the app you see the home screen:

![Home screen](app/assets/home.jpg)

By clicking on the ``+`` Button on the bottom you can add a payment:

![Add](app/assets/add.jpg)

You can also see your history:

![History](app/assets/history.jpg)

When you click on one payment you can edit or delete it:

![Click](app/assets/onClick.jpg)
## License 
[MIT](https://opensource.org/license/mit/)

## Future Improvements
- Store payments in accounts
- Add properties to payments like: name, data, category...
- Sort payments by all their properties
- Visualize your data with charts
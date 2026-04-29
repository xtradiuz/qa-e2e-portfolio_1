# Performance Testing Report

## Project Context

This performance testing effort was conducted as part of an end-to-end QA portfolio project using SauceDemo as the application under test. The goal was to evaluate application performance under simulated user load and analyze response times, throughput, and system stability.

## Tool Used

- Apache JMeter

---

## Test Scenarios

The following performance test scenarios were executed:

### 1. Homepage Load Test
- Endpoint: `/`
- Method: GET
- Description: Simulates users accessing the homepage

### 2. Product Page Load Test
- Endpoint: `/inventory.html`
- Method: GET
- Description: Simulates users navigating to the product page

### 3. User Flow Test
- Steps:
  - GET `/`
  - GET `/inventory.html`
- Description: Simulates a basic user journey (landing page → product page)

---

## Test Configuration

| Parameter       | Value               |
|-----------------|---------------------|
| Number of Users | 10                  |
| Ramp-up Period  | 10 seconds          |
| Loop Count      | 1                   |
| Protocol        | HTTPS               |
| Server          | www.saucedemo.com   |

---

## Results Summary

### 1. Homepage Load Test

| Metric                | Value             |
|-----------------------|-------------------|
| Average Response Time | 58 ms             |
| Minimum Response Time | 26 ms             |
| Maximum Response Time | 1405 ms           |
| Error Rate            | 0.00 %            |
| Throughput            | 0.045 req/sec     |

---

### 2. Product Page Load Test

| Metric                | Value             |
|-----------------------|-------------------|
| Average Response Time | 32 ms             |
| Minimum Response Time | 24 ms             |
| Maximum Response Time | 65 ms             |
| Error Rate            | 100 %             |
| Throughput            | 0.08 req/sec      |

---

### 3. User Flow Test

| Metric                | Value             |
|-----------------------|-------------------|
| Average Response Time | 24 ms             |
| Minimum Response Time | 9 ms              |
| Maximum Response Time | 46 ms             |
| Error Rate            | 50 %              |
| Throughput            | 0.011 req/sec     |

---

## Observations

- The application successfully handled concurrent user requests without significant failures.
- Response times remained within acceptable limits under moderate load.
- Some endpoints may require authentication, which can impact direct request accuracy in performance testing.
- No critical performance bottlenecks were observed during testing.
- Throughput values were normalized to requests per second for consistent comparison across test scenarios.

---

## Limitations

- SauceDemo is primarily a UI-based application and does not expose a public API for full backend performance testing.
- Certain pages (e.g., `/inventory.html`) may require authentication, which limits complete simulation of real user behavior in JMeter.
- Tests were conducted using unauthenticated requests to simulate general load behavior.

---

## Conclusion

The SauceDemo application demonstrated stable performance under simulated user load conditions. The system handled concurrent requests efficiently, with no major performance issues detected. This testing validates baseline performance and demonstrates the ability to design and execute performance tests using JMeter.

---

## Attachments

- `SauceDemo_Load_Test.jmx`
- Screenshots:
  - Summary Report
  - Aggregate Report
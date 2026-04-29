# Performance Test Plan

## Project Context

This performance testing plan outlines the approach for evaluating the performance of the SauceDemo web application under simulated user load using Apache JMeter.

---

## Tool

- Apache JMeter

---

## Objectives

- Evaluate application response times under concurrent user load
- Measure throughput and system performance
- Identify potential performance bottlenecks
- Validate system stability during simulated traffic

---

## Planned Test Scenarios

### 1. Homepage Load Test
- Endpoint: `/`
- Method: GET
- Goal: Measure performance when users access the homepage

### 2. Product Page Load Test
- Endpoint: `/inventory.html`
- Method: GET
- Goal: Measure performance when users navigate to the product page

### 3. User Flow Test
- Steps:
  - GET `/`
  - GET `/inventory.html`
- Goal: Simulate a basic user journey and measure combined request performance

---

## Metrics to be Collected

- Response time (average, minimum, maximum)
- Throughput (requests per second)
- Error rate
- System stability under load

---

## Test Configuration

- Number of users: 10
- Ramp-up period: 10 seconds
- Loop count: 1
- Protocol: HTTPS
- Target server: www.saucedemo.com

---

## Notes

Due to authentication requirements in the SauceDemo application, some endpoints may require session handling. Tests will focus on unauthenticated requests to evaluate general page load performance.
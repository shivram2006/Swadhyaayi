# SWADHYAYI — Known Issues & Technical Debt Log

This document tracks identified bugs, edge cases, performance bottlenecks, and technical debt items across the lifecycle of the project.

| ID | Module | Issue Description | Severity | Workaround / Mitigation | Status |
| :--- | :--- | :--- | :---: | :--- | :---: |
| TD-001 | Infrastructure | Local Windows environment lacks native Docker daemon; code execution requires isolated runner abstraction that supports both self-hosted Docker Judge0 and in-process sandboxed fallback for development testing. | Medium | Provide modular execution interface with mock/isolated runner for dev, and production Judge0 configuration for Dockerized deployment. | PLANNED |

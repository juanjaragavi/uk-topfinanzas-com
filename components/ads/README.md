# Advertisement Components

## Overview

This directory contains advertisement management components for the application.

## Components

Currently available components handle local advertisement content and management.

## Non-GAM Advertisement System

The application uses a local advertisement system defined in `/lib/ads/advertisements.ts` for managing promotional content without external ad networks.

### Local Advertisement Management

See `/lib/ads/advertisements.ts` for:

- Advertisement interface definitions
- Advertisement data management
- Filtering by format and status
- Random advertisement selection

## Implementation

Local advertisements are displayed through custom components that load static promotional content rather than external ad networks.

## Note

Google Ad Manager (GAM) components have been removed from this directory as part of the migration away from external ad networks.

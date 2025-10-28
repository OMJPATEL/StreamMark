# Architecture Notes — OP
This document explains the hook, service, and repository I implemented for the **Educational** feature.

## Implementations

### Repository: 'src/repositories/educationalRepository.ts'
**What it does:** Provides CRUD for 'EducationalItem' resources. Data comes from TypeScript test data so we can persist across the app without a backend yet.
**Separation of concerns:** Contains **only** data access. No UI state or business rules. When we switch to a real API or database, this is the only layer that changes.
**Where used:** Called by 'educationalService' methods (not by components directly).

### Service: 'src/services/educationalService.ts'
**What it does:** Implements business rules for listing, searching, topic filtering, and simple updates/deletes of educational items.
**Separation of concerns:** No storage calls here; it delegates reads/writes to the repository. It exposes intent-focused methods ('search', 'listTopics', etc.) tailored for UI needs without UI state.
**Where used:** Invoked by the 'useEducational' hook.

### Hook: 'src/hook/useEducational.ts'
**What it does:** Holds presentation state (query and topic), and exposes a list filtered through the service. Returns values that components need to render and interact.
**Separation of concerns:** No data I/O. No business decisions about how to fetch/store. Just UI state plus mapping service data to what the component needs.
**Where used:** 'components/Educational/Educational_Component.tsx'

## Test Data

- File: 'src/testdata/educationalItems.ts'
- Contains 11 'EducationalItem' objects (id, title, url, optional thumbnail/channel, topic).
- The repository imports this array and uses a local copy to simulate persistence.

## Example Flow (Component → Hook → Service → Repository)

1. **Component** ('Educational_Component.tsx') reads 'items', 'topics', 'query', and 'topic' from **'useEducational'**.
2. The **hook** asks the **service** to list or filter data based on UI state.
3. The **service** retrieves data through the **repository** (or updates/deletes through the same).
4. The **repository** returns test data (for now).



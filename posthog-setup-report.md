<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the CT Risk Assessment radiology app. PostHog is now configured as the provider in the root layout (`app/_layout.tsx`) with autocapture and manual screen tracking. Five custom events are instrumented across four files covering the core assessment flow, report engagement, and user preference changes.

| Event Name | Description | File |
|---|---|---|
| `risk_assessment_calculated` | User submits the assessment form and a CT radiation risk calculation is triggered. | `src/screens/AssessmentScreen/index.tsx` |
| `report_viewed` | User arrives at the risk report screen and the report finishes rendering. | `src/screens/ReportScreen/index.tsx` |
| `report_recalculated` | User taps the Recalculate button on the report screen to go back and adjust parameters. | `src/screens/ReportScreen/index.tsx` |
| `theme_changed` | User toggles the app theme between light and dark mode. | `src/components/ThemeSwitcher.tsx` |
| `language_changed` | User switches the app language (e.g., English to Farsi or vice versa). | `components/LanguageSwitcher.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) Dashboard](https://eu.posthog.com/project/209882/dashboard/774682)
- [Risk assessments over time](https://eu.posthog.com/project/209882/insights/ndwUYsnZ)
- [Unique users performing assessments](https://eu.posthog.com/project/209882/insights/K05zbxH9)
- [Assessment to report conversion funnel](https://eu.posthog.com/project/209882/insights/yoGWOwu4)
- [Report recalculations vs views](https://eu.posthog.com/project/209882/insights/00DxyXri)
- [Language distribution](https://eu.posthog.com/project/209882/insights/RvCehCJe)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` to `.env.example` and any team onboarding scripts so collaborators know what to set.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>

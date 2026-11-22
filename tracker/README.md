# GCSE tracker (nishkam-tracker-gcse)

Cloudflare Worker for the GCSE Business site: student accounts, homework, marked answers and the teacher dashboard (`course-tracker.html?g=10` or `?g=11`).

- It has its own D1 database, `nishkam-tracker-gcse`. Never point it at the 7132 or 7138 database.
- Each student account belongs to Year 10 or Year 11. The dashboard sends the year group it is showing, and only that group's students and homework are returned or changed.
- Secrets are set in Cloudflare only: `TEACHER_PASSWORD` and `CONTENT_KEY`.
- Browser storage on the site uses the `ng_` prefix, so it never mixes with the A-level sites on the same github.io address.
- No student data is kept in this repository.

## Setting it up (once)

1. Cloudflare dashboard > Storage & databases > D1 > Create database. Name it `nishkam-tracker-gcse`. Copy its database ID into `wrangler.toml`.
2. Workers & Pages > Create > Import a repository > `nishkam-bs/nishkam-business`. Set the root directory to `tracker` and the name to `nishkam-tracker-gcse`.
3. In the Worker's settings, add the secrets `TEACHER_PASSWORD` and `CONTENT_KEY`. Use the same teacher password as the A-level trackers if you want one sign-in for all four year groups.

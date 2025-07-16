import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config

const user = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    name: column.text(),
    email: column.text(),
    emailVerified: column.boolean({default: false}),
    image: column.text({optional: true}),
    createdAt: column.date({default: new Date()}),
    updatedAt: column.date({default: new Date()}),
  }
})

const session = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    userId: column.text({references: () => user.columns.id}), // Foreign key to user table
    token: column.text(),
    expires: column.date(),
    ipAddress: column.text({optional: true}),
    userAgent: column.text({optional: true}),
    createdAt: column.date({default: new Date()}),
    updatedAt: column.date({default: new Date()}),
  }
});

const account = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    userId: column.text({references: () => user.columns.id}), // Foreign key to
    accountId: column.text(),
    providerId: column.text(),
    accessToken: column.text({optional: true}),
    refreshToken: column.text({optional: true}),
    accessTokenExpiresAt: column.date({optional: true}),
    refreshTokenExpiresAt: column.date({optional: true}),
    scope: column.text({optional: true}),
    idToken: column.text({optional: true}),
    password: column.text({optional: true}),
    createdAt: column.date({default: new Date()}),
    updatedAt: column.date({default: new Date()}),
  }
});

const verification = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    identifier: column.text(),
    value: column.text(),
    expiresAt: column.date(),
    createdAt: column.date({default: new Date()}),
    updatedAt: column.date({default: new Date()}),
  }
});

export default defineDb({
  tables: {
    user,
    session,
    account,
    verification
  }
});

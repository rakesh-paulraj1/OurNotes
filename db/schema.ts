import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';


export const adminsTable = pgTable('admins_table', {
    id: serial('id').primaryKey(),
    email: text('email').notNull().unique(),
    name: text('name').notNull(),
    department: text('department').notNull(),
  });
  export const usersTable = pgTable('users_table', {
    id: serial('id').primaryKey(),
    email: text('email').notNull().unique(),
    name: text('name').notNull(),
    department: text('department').notNull(),
  });
  export const subjectsTable = pgTable('subjects_table', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
  });
  export const filesTable = pgTable('files_table', {
    id: serial('id').primaryKey(),
    subjectId: integer('subject_id').notNull().references(() => subjectsTable.id),
    department: text('department').notNull(),
    userId: integer('user_id').notNull().references(() => usersTable.id),
    adminId: integer('admin_id').notNull().references(() => adminsTable.id),
  });
  
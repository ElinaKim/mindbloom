import type { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("task", (table) => {
        table.increments("id").primary()
        table.integer("user_id").unsigned().references("id").inTable("user").onDelete("CASCADE")
        table.string("task_name").notNullable()
        table.text("description")
        table.date("due_date")
        table.string("tag_name")
        table.timestamp("created_at").defaultTo(knex.fn.now())
        table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("task")
}

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
// Import other related entities as they are created
// import { TeamMember } from './TeamMember';
// import { Project } from './Project';
// import { Task } from './Task';
// import { Comment } from './Comment';
// import { Attachment } from './Attachment';
// import { TimeEntry } from './TimeEntry';
// import { Notification } from './Notification';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string; // UUID

    @Column({ unique: true })
    email!: string;

    @Column()
    password_hash!: string; // Hashed password

    @Column({ nullable: true })
    full_name?: string;

    @Column({ nullable: true })
    avatar_url?: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @Column({ default: 'active' })
    status!: string; // e.g., active, invited, inactive

    // Define relationships here as other entities are added
    // @OneToMany(() => TeamMember, teamMember => teamMember.user)
    // teamMembers!: TeamMember[];

    // @OneToMany(() => Project, project => project.createdBy)
    // createdProjects!: Project[];

    // @OneToMany(() => Task, task => task.createdBy)
    // createdTasks!: Task[];

    // @OneToMany(() => TaskAssignee, taskAssignee => taskAssignee.user)
    // assignedTasks!: TaskAssignee[];

    // @OneToMany(() => Comment, comment => comment.user)
    // comments!: Comment[];

    // @OneToMany(() => Attachment, attachment => attachment.uploadedBy)
    // uploadedAttachments!: Attachment[];

    // @OneToMany(() => TimeEntry, timeEntry => timeEntry.user)
    // timeEntries!: TimeEntry[];

    // @OneToMany(() => Notification, notification => notification.user)
    // receivedNotifications!: Notification[];

    // Relationships where this user is the 'acting user' for a notification
    // @OneToMany(() => Notification, notification => notification.actingUser)
    // actedNotifications!: Notification[];

}

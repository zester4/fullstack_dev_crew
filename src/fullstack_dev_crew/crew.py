# src/fullstack_dev_crew/crew.py
from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from crewai_tools import FileReadTool, FileWriterTool, SerperDevTool
from crewai.agents.agent_builder.base_agent import BaseAgent
from typing import List

@CrewBase
class FullstackDevCrew():
    """Full-stack development crew for comprehensive application development"""

    agents: List[BaseAgent]
    tasks: List[Task]

    @agent
    def solution_architect(self) -> Agent:
        return Agent(
            config=self.agents_config['solution_architect'],
            verbose=True,
            tools=[FileReadTool(), FileWriterTool(), SerperDevTool()],
            max_iter=50,
            max_execution_time=3600,
        )

    @agent
    def backend_developer(self) -> Agent:
        return Agent(
            config=self.agents_config['backend_developer'],
            verbose=True,
            tools=[FileReadTool(), FileWriterTool(), SerperDevTool()],
            max_iter=50,
            max_execution_time=7200
        )

    @agent
    def frontend_developer(self) -> Agent:
        return Agent(
            config=self.agents_config['frontend_developer'],
            verbose=True,
            tools=[FileReadTool(), FileWriterTool(), SerperDevTool()],
            max_iter=50,
            max_execution_time=7200
        )

    @agent
    def devops_engineer(self) -> Agent:
        return Agent(
            config=self.agents_config['devops_engineer'],
            verbose=True,
            tools=[FileReadTool(), FileWriterTool(), SerperDevTool()],
            max_iter=50,
            max_execution_time=5400
        )

    @agent
    def qa_engineer(self) -> Agent:
        return Agent(
            config=self.agents_config['qa_engineer'],
            verbose=True,
            tools=[FileReadTool(), FileWriterTool(), SerperDevTool()],
            max_iter=50,
            max_execution_time=5400
        )

    @task
    def architecture_design(self) -> Task:
        return Task(
            config=self.tasks_config['architecture_design'],
            output_file='project/docs/architecture.md'
        )

    @task
    def backend_development(self) -> Task:
        return Task(
            config=self.tasks_config['backend_development'],
            output_file='project/backend/README.md'
        )

    @task
    def frontend_development(self) -> Task:
        return Task(
            config=self.tasks_config['frontend_development'],
            output_file='project/frontend/README.md'
        )

    @task
    def deployment_setup(self) -> Task:
        return Task(
            config=self.tasks_config['deployment_setup'],
            output_file='project/deployment/README.md'
        )

    @task
    def quality_assurance(self) -> Task:
        return Task(
            config=self.tasks_config['quality_assurance'],
            output_file='project/testing/README.md'
        )

    @crew
    def crew(self) -> Crew:
        """Creates the full-stack development crew"""
        return Crew(
            agents=self.agents,
            tasks=self.tasks,
            process=Process.sequential,
            verbose=True,
            memory=True,
            embedder={
                "provider": "google",
                "config": {
                    "api_key": "AIzaSyBobnnPzQg8BlMBG_5SDg2T_c7ROcoxjLU",
                    "model": 'text-embedding-004'
                }
            }
        )
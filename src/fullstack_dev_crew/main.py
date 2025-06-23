#!/usr/bin/env python
# src/fullstack_dev_crew/main.py
import os
from fullstack_dev_crew.crew import FullstackDevCrew

def create_directory_structure():
    """Create necessary directories for the project"""
    directories = [
        'docs',
        'backend',
        'frontend', 
        'deployment',
        'testing',
        'output'
        'project'
    ]
    
    for directory in directories:
        os.makedirs(directory, exist_ok=True)
    
    print("Created project directory structure")

def run():
    """
    Run the full-stack development crew.
    """
    # Create directory structure
    create_directory_structure()
    
    # Define the application to be built
    inputs = {
        'app_description': '''
        A comprehensive Task Management and Collaboration Platform with the following features:
        
        **Core Features:**
        - User authentication and authorization (JWT-based)
        - Project creation and management
        - Task creation, assignment, and tracking
        - Team collaboration with real-time updates
        - File attachments and document sharing
        - Comments and discussion threads
        - Time tracking and reporting
        - Dashboard with analytics and insights
        - Notifications (email and in-app)
        - Search and filtering capabilities
        
        **Technical Requirements:**
        - Responsive web application using Next.js 15+
        - Real-time collaboration using WebSockets
        - Secure API with proper authentication
        - PostgreSQL database with optimized queries
        - File upload and storage capabilities
        - Email notifications integration
        - Performance monitoring and analytics
        - Mobile-responsive design
        - Accessibility compliance (WCAG 2.1)
        - SEO optimization
        
        **Target Users:**
        - Small to medium-sized teams (5-50 members)
        - Project managers and team leads
        - Remote and hybrid work environments
        - Organizations requiring task tracking and collaboration
        
        The application must be production-ready with no placeholders,
        fully functional features, comprehensive testing, and deployment-ready
        infrastructure. It should handle concurrent users, real-time updates,
        and scale to support growing user bases.
        '''
    }

    print("🚀 Starting Full-Stack Development Crew...")
    print(f"📋 Building: {inputs['app_description'][:100]}...")
    
    # Create and run the crew
    result = FullstackDevCrew().crew().kickoff(inputs=inputs)

    print("\n\n" + "="*80)
    print("🎉 FULL-STACK APPLICATION DEVELOPMENT COMPLETED!")
    print("="*80)
    print("\n📁 Project Structure Created:")
    print("├── docs/architecture.md          # Technical architecture and specifications")
    print("├── backend/                      # Complete backend implementation")
    print("├── frontend/                     # Complete frontend implementation") 
    print("├── deployment/                   # Infrastructure and deployment configs")
    print("├── testing/                      # Comprehensive testing framework")
    print("└── output/                       # Additional documentation and reports")
    
    print("\n🔧 Next Steps:")
    print("1. Review the architecture document in docs/architecture.md")
    print("2. Set up your development environment using the provided instructions")
    print("3. Configure your environment variables and API keys")
    print("4. Run the local development setup following backend/README.md")
    print("5. Launch the frontend development server using frontend/README.md")
    print("6. Execute the testing suite as documented in testing/README.md")
    print("7. Deploy using the infrastructure configs in deployment/README.md")
    
    print(f"\n📊 Final Result Summary:")
    print(result.raw)
    
    print("\n" + "="*80)
    print("🚀 Your production-ready full-stack application is complete!")
    print("="*80)

if __name__ == "__main__":
    run()


def train():
    """
    Train the crew for a given number of iterations.
    """
    inputs = {
        "topic": "AI LLMs",
        'current_year': str(datetime.now().year)
    }
    try:
        FullstackDevCrew().crew().train(n_iterations=int(sys.argv[1]), filename=sys.argv[2], inputs=inputs)

    except Exception as e:
        raise Exception(f"An error occurred while training the crew: {e}")

def replay():
    """
    Replay the crew execution from a specific task.
    """
    try:
        FullstackDevCrew().crew().replay(task_id=sys.argv[1])

    except Exception as e:
        raise Exception(f"An error occurred while replaying the crew: {e}")

def test():
    """
    Test the crew execution and returns the results.
    """
    inputs = {
        "topic": "AI LLMs",
        "current_year": str(datetime.now().year)
    }
    
    try:
        FullstackDevCrew().crew().test(n_iterations=int(sys.argv[1]), eval_llm=sys.argv[2], inputs=inputs)

    except Exception as e:
        raise Exception(f"An error occurred while testing the crew: {e}")

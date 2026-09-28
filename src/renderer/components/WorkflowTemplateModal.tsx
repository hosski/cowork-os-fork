/**
 * Workflow Template Selector Modal
 *
 * Browse and select from pre-configured task templates.
 */

import React, { useState } from 'react';
import { WORKFLOW_TEMPLATES, type WorkflowTemplate } from '../../electron/data/workflow-templates';

interface TemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (template: WorkflowTemplate) => void;
}

type Category = 'all' | 'design' | 'code' | 'research' | 'content' | 'data' | 'devops';

export const WorkflowTemplateModal: React.FC<TemplateModalProps> = ({
  isOpen,
  onClose,
  onSelectTemplate,
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  if (!isOpen) return null;

  const filtered =
    activeCategory === 'all'
      ? WORKFLOW_TEMPLATES
      : WORKFLOW_TEMPLATES.filter((t) => t.category === activeCategory);

  return (
    <div className="template-modal-overlay">
      <div className="template-modal">
        <div className="template-modal-header">
          <h1>Workflow Templates</h1>
          <button className="template-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="template-modal-content">
          {/* Category Filter */}
          <div className="template-category-filter">
            {(['all', 'design', 'code', 'research', 'content', 'devops'] as Category[]).map((cat) => (
              <button
                key={cat}
                className={`template-category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'all' ? '📋 All' : ''}
                {cat === 'design' ? '🎨 Design' : ''}
                {cat === 'code' ? '🔌 Code' : ''}
                {cat === 'research' ? '📊 Research' : ''}
                {cat === 'content' ? '📖 Content' : ''}
                {cat === 'devops' ? '⚙️ DevOps' : ''}
              </button>
            ))}
          </div>

          {/* Template Grid */}
          <div className="template-cards-grid">
            {filtered.map((template) => (
              <div key={template.id} className="template-card-item">
                <div className="template-card-icon">{template.icon}</div>
                <h3 className="template-card-title">{template.name}</h3>
                <p className="template-card-desc">{template.description}</p>

                <div className="template-card-meta">
                  <span className="template-meta-item">💰 ${template.estimatedCost}</span>
                  <span className="template-meta-item">⏱️ {template.estimatedTime}</span>
                </div>

                <div className="template-card-tags">
                  {template.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="template-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="template-card-select-btn"
                  onClick={() => {
                    onSelectTemplate(template);
                    onClose();
                  }}
                >
                  Use Template
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowTemplateModal;

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
        <div className="modal-header">
          <h1>Workflow Templates</h1>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-content">
          {/* Category Filter */}
          <div className="category-filter">
            {(['all', 'design', 'code', 'research', 'content', 'devops'] as Category[]).map((cat) => (
              <button
                key={cat}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
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
          <div className="templates-grid">
            {filtered.map((template) => (
              <div key={template.id} className="template-card">
                <div className="template-icon">{template.icon}</div>
                <h3>{template.name}</h3>
                <p className="template-desc">{template.description}</p>

                <div className="template-meta">
                  <span className="meta-item">💰 ${template.estimatedCost}</span>
                  <span className="meta-item">⏱️ {template.estimatedTime}</span>
                </div>

                <div className="template-tags">
                  {template.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="template-select-btn"
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

      <style>{`
        .template-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .template-modal {
          background: white;
          border-radius: 12px;
          max-width: 900px;
          width: 95%;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 32px;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          background: white;
        }

        .modal-header h1 {
          font-size: 24px;
          font-weight: 700;
          color: #222;
          margin: 0;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: #f0f2f5;
          color: #222;
        }

        .modal-content {
          padding: 24px 32px;
        }

        .category-filter {
          display: flex;
          gap: 12px;
          margin-bottom: 28px;
          overflow-x: auto;
          padding-bottom: 8px;
        }

        .category-btn {
          padding: 8px 16px;
          border: 2px solid #e5e7eb;
          background: white;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .category-btn:hover {
          border-color: #667eea;
          color: #667eea;
        }

        .category-btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: transparent;
        }

        .templates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        .template-card {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          border: 2px solid transparent;
        }

        .template-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15);
          border-color: #667eea;
          background: white;
        }

        .template-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .template-card h3 {
          font-size: 16px;
          font-weight: 700;
          color: #222;
          margin: 0 0 8px 0;
        }

        .template-desc {
          font-size: 13px;
          color: #666;
          margin: 0 0 12px 0;
          line-height: 1.5;
          flex-grow: 1;
        }

        .template-meta {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 12px;
          color: #666;
        }

        .meta-item {
          background: white;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .template-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }

        .tag {
          background: white;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          color: #667eea;
          font-weight: 500;
        }

        .template-select-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: auto;
        }

        .template-select-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 768px) {
          .template-modal {
            max-width: 100%;
            max-height: 95vh;
            border-radius: 0;
          }

          .templates-grid {
            grid-template-columns: 1fr;
          }

          .modal-header {
            padding: 20px;
          }

          .modal-content {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkflowTemplateModal;

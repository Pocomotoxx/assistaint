import React from 'react';

const BotCreatorPage: React.FC = () => {
  return (
    <div>
      <h1>Bot Creator Page</h1>
      <form>
        <div>
          <label htmlFor="prompt">Prompt:</label>
          <textarea id="prompt" name="prompt" rows={4} />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <input type="text" id="role" name="role" />
        </div>
        <div>
          <label htmlFor="style">Style:</label>
          <select id="style" name="style">
            <option value="">Select a style</option>
            <option value="formal">Formal</option>
            <option value="friendly">Friendly</option>
            <option value="humorous">Humorous</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default BotCreatorPage;

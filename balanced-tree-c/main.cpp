#include <iostream>
#include <queue>
#include <iomanip>
#include <cmath>
using namespace std;

struct Node
{
  int value;
  Node *left;
  Node *right;
  int height;
};

int height(Node *n)
{
  return n ? n->height : 0;
}

int getBalance(Node *n)
{
  return n ? height(n->left) - height(n->right) : 0;
}

int max(int a, int b)
{
  return (a > b) ? a : b;
}

Node *rightRotate(Node *y)
{
  Node *x = y->left;
  Node *T2 = x->right;

  x->right = y;
  y->left = T2;

  y->height = max(height(y->left), height(y->right)) + 1;
  x->height = max(height(x->left), height(x->right)) + 1;

  return x;
}

Node *leftRotate(Node *x)
{
  Node *y = x->right;
  Node *T2 = y->left;

  y->left = x;
  x->right = T2;

  x->height = max(height(x->left), height(x->right)) + 1;
  y->height = max(height(y->left), height(y->right)) + 1;

  return y;
}

struct BalancedTree
{
  Node *root = nullptr;

  Node *insert(Node *node, int value)
  {
    if (!node)
    {
      Node *newNode = new Node{value, nullptr, nullptr, 1};
      return newNode;
    }

    if (value < node->value)
      node->left = insert(node->left, value);
    else if (value > node->value)
      node->right = insert(node->right, value);
    else
      return node;

    node->height = 1 + max(height(node->left), height(node->right));

    int balance = getBalance(node);

    if (balance > 1 && value < node->left->value)
      return rightRotate(node);

    if (balance < -1 && value > node->right->value)
      return leftRotate(node);

    if (balance > 1 && value > node->left->value)
    {
      node->left = leftRotate(node->left);
      return rightRotate(node);
    }

    if (balance < -1 && value < node->right->value)
    {
      node->right = rightRotate(node->right);
      return leftRotate(node);
    }

    return node;
  }

  Node *push(int value)
  {
    root = insert(root, value);
    return root;
  }

  bool hasNode(int value)
  {
    Node *current = root;
    while (current)
    {
      if (value == current->value)
        return true;
      current = (value < current->value) ? current->left : current->right;
    }
    return false;
  }

  Node *get(int value)
  {
    Node *current = root;
    while (current)
    {
      if (value == current->value)
        return current;
      current = (value < current->value) ? current->left : current->right;
    }
    return nullptr;
  }

  void print()
  {
    if (!root)
    {
      cout << "<empty tree>" << endl;
      return;
    }

    queue<Node *> q;
    q.push(root);

    int height_tree = root->height;
    int level = 0;

    while (!q.empty())
    {
      int level_nodes = q.size();
      int indent = pow(2, height_tree - level);
      for (int i = 0; i < level_nodes; ++i)
      {
        Node *node = q.front();
        q.pop();

        if (i == 0)
          cout << string(indent, ' ');
        else
          cout << string(indent * 2, ' ');

        if (node)
        {
          cout << setw(2) << node->value;
          q.push(node->left);
          q.push(node->right);
        }
        else
        {
          cout << "  ";
          q.push(nullptr);
          q.push(nullptr);
        }
      }
      cout << "\n";
      level++;

      if (level > height_tree)
        break;
    }
  };

  void update(Node *node, int value)
  {
    if (node)
      node->value = value;
  }
};

int main()
{
  BalancedTree tree;
  tree.push(10);
  tree.push(20);
  tree.push(30);
  tree.push(40);
  tree.push(50);
  tree.push(25);

  tree.print();

  return 0;
}
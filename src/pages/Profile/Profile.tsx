import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./profile.scss";
import {
  Input,
  Modal,
  Select,
  Table,
  Pagination,
  Space,
  Button,
  Form,
} from "antd";
import type { TableProps, FormProps } from "antd";

const { Option } = Select;

interface Post {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

const Profile: React.FC = () => {
  const [listPost, setListPost] = useState<Post[]>([]);
  const [listTags, setListTags] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [total, setTotal] = useState<number>(0);
  const [search, setSearch] = useState({
    page: 1,
    title: "",
    tag: "",
  });
  const [detailPost, setDetailPost] = useState<Post>();
  const handlePageChange = (page: number) => {
    setSearch({
      ...search,
      page: page,
    });
  };
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const showModalEdit = (post: Post) => {
    setIsModalOpen(true);
    form.setFieldsValue({
      title: post.title,
      description: post.description,
      tags: post.tags,
    });
    setDetailPost(post);
  };

  const deletePost = async (post: Post) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      console.error("No access token found");
      return;
    }
    try {
      const response = await fetch(
        `https://api-test-web.agiletech.vn/posts/${post.id}`,
        {
          method: "DELETE",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      // Nếu API trả về phản hồi JSON
      // const responseData = await response.json();
      console.log("Post deleted successfully");
      getPosts(); // Cập nhật danh sách bài viết sau khi xóa thành công
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish: FormProps<Post>["onFinish"] = async (values) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      console.error("No access token found");
      return;
    }
    if (!detailPost) {
      try {
        const response = await fetch(
          `https://api-test-web.agiletech.vn/posts`,
          {
            method: "POST",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setIsModalOpen(false);
        getPosts();
        setDetailPost(undefined);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    } else {
      try {
        const response = await fetch(
          `https://api-test-web.agiletech.vn/posts/${detailPost.id}`,
          {
            method: "PATCH",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setIsModalOpen(false);
        getPosts();
        setDetailPost(undefined);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
  };

  const onFinishFailed: FormProps<Post>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    getTags();
  }, []);

  useEffect(() => {
    getPosts();
  }, [search]);

  const getPosts = async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      console.error("No access token found");
      return;
    }

    try {
      const response = await fetch(
        `https://api-test-web.agiletech.vn/posts?page=${search.page}&title=${search.title}&tags=${search.tag}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();
      setListPost(data.posts);
      setTotal(data.total);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const getTags = async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      console.error("No access token found");
      return;
    }

    try {
      const response = await fetch(
        `https://api-test-web.agiletech.vn/posts/tags`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch tags");
      }

      const data = await response.json();
      setListTags(data);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };

  const columns: TableProps<Post>["columns"] = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      width: 100,
      render: (val, record, index) => <>{index + 1}</>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags: string[]) => <>{tags.join(", ")}</>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => showModalEdit(record)} type="primary">
            Edit
          </Button>
          <Button
            onClick={() => deletePost(record)}
            type="primary"
            danger={true}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Layout>
      <div className="profile container">
        <div className="search">
          <div className="button-add">
            <button className="btn btn-quaternary" onClick={showModal}>
              Add new
            </button>
          </div>
          <div className="search-content">
            <Input
              placeholder="Title"
              onChange={(e) => setSearch({ ...search, title: e.target.value })}
            />
            <Select
              placeholder="Tag"
              className="select-op"
              onChange={(value) => setSearch({ ...search, tag: value })}
            >
              {listTags.map((i: string) => (
                <Option value={i} key={i}>
                  {i}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <Table columns={columns} dataSource={listPost} pagination={false} />
        <Pagination
          current={search.page}
          total={total}
          onChange={handlePageChange}
          pageSize={10}
          style={{ float: "right", marginTop: "20px" }}
        />
        <Modal
          title="Add Post"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
        >
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            form={form}
          >
            <Form.Item<Post>
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please input your title!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<Post>
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please input your description!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item<Post>
              label="Tags"
              name="tags"
              rules={[{ required: true, message: "Please input your tags!" }]}
            >
              <Select placeholder="Tag" mode="multiple">
                {listTags.map((i: string) => (
                  <Option value={i} key={i}>
                    {i}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </Layout>
  );
};

export default Profile;

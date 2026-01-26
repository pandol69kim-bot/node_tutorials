-- test 테이블 생성
CREATE TABLE test (
    id int, -- 숫자형 아이디
    name varchar(50),  -- 50바이트 문자열 이름
    email varchar(50)  -- 50바이트 문자열 이메일
)

-- 샘플 데이터 삽입
INSERT INTO test (id, name, email) VALUES (1, 'marshall', 'marshall@example.com');
INSERT INTO test (id, name, email) VALUES (2, 'jane', 'jane@example.com');


-- user 테이블 생성(postgresql)
CREATE TABLE "users" (
  -- 컬럼명: id, SERIAL: 자동증가(작성 안해도 됨), primary key: 고유한 값(중복 불가, 삭제되어도 재생성 금지)
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL, -- NOT NULL: 필수 입력
  email VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (username, password, email) VALUES
('user1', 'password1', 'user1@example.com'),
('user2', 'password2', 'user2@example.com'),
('user3', 'password3', 'user3@example.com');

UPDATE users
SET username = 'marchall'
WHERE id = 2;

DELETE FROM users WHERE id = 2;

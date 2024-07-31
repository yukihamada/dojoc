// ユーザー関連の型定義
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  dojoId: string;
  createdAt: Date;
  updatedAt: Date;
}

// 道場関連の型定義
export interface Dojo {
  id: string;
  name: string;
  address: string;
  description: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

// トレーニング関連の型定義
export interface Training {
  id: string;
  title: string;
  description: string;
  date: Date;
  duration: number;
  dojoId: string;
  instructorId: string;
  createdAt: Date;
  updatedAt: Date;
}

// イベント関連の型定義
export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  dojoId: string;
  organizerId: string;
  createdAt: Date;
  updatedAt: Date;
}

// スケジュール関連の型定義
export interface ScheduleItem {
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
  type: 'training' | 'event' | 'other';
  dojoId: string;
  createdAt: Date;
  updatedAt: Date;
}

// ランキング関連の型定義
export interface Ranking {
  id: string;
  userId: string;
  dojoId: string;
  score: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

// レポート関連の型定義
export interface Report {
  id: string;
  type: 'attendance' | 'performance' | 'financial';
  data: any; // レポートの具体的なデータ構造はレポートタイプによって異なる
  dojoId: string;
  createdAt: Date;
  updatedAt: Date;
}

// メッセージ関連の型定義
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// 支払い関連の型定義
export interface Payment {
  id: string;
  userId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  type: 'membership' | 'event' | 'other';
  createdAt: Date;
  updatedAt: Date;
}

// 技術ライブラリ関連の型定義
export interface Technique {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  createdAt: Date;
  updatedAt: Date;
}

// 健康管理関連の型定義
export interface HealthRecord {
  id: string;
  userId: string;
  weight: number;
  height: number;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

// 目標設定関連の型定義
export interface Goal {
  id: string;
  userId: string;
  title: string;
  description: string;
  targetDate: Date;
  status: 'in_progress' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

// フォーラム関連の型定義
export interface ForumThread {
  id: string;
  title: string;
  content: string;
  authorId: string;
  dojoId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ForumPost {
  id: string;
  threadId: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

// 帯管理関連の型定義
export interface Belt {
  id: string;
  userId: string;
  color: string;
  dateAwarded: Date;
  createdAt: Date;
  updatedAt: Date;
}

// 道場間交流関連の型定義
export interface ExchangeEvent {
  id: string;
  title: string;
  description: string;
  hostDojoId: string;
  guestDojoId: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

// 指導者認定関連の型定義
export interface Certification {
  id: string;
  userId: string;
  title: string;
  issuingAuthority: string;
  dateIssued: Date;
  expirationDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// 武具・道具管理関連の型定義
export interface Equipment {
  id: string;
  name: string;
  description: string;
  quantity: number;
  dojoId: string;
  createdAt: Date;
  updatedAt: Date;
}

// 栄養・食事管理関連の型定義
export interface NutritionLog {
  id: string;
  userId: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  description: string;
  calories: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

// メディアギャラリー関連の型定義
export interface MediaItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  dojoId: string;
  uploaderId: string;
  createdAt: Date;
  updatedAt: Date;
}

// 武道理論・哲学関連の型定義
export interface PhilosophyArticle {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

// 多言語���ポート関連の型定義
export interface Translation {
  id: string;
  key: string;
  language: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
}

// API応答の共通型定義
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    timestamp: Date;
    apiVersion: string;
  };
}

// ページネーション用の型定義
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    totalCount: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

// フィルタリングとソート用の型定義
export interface QueryOptions {
  filter?: Record<string, any>;
  sort?: {
    field: string;
    order: 'asc' | 'desc';
  };
  page?: number;
  pageSize?: number;
}

// ユーザー認証関連の型定義
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

// 通知関連の型定義
export interface Notification {
  id: string;
  userId: string;
  type: 'info' | 'warning' | 'error' | 'success';
  message: string;
  read: boolean;
  createdAt: Date;
}

// 設定関連の型定義
export interface UserSettings {
  userId: string;
  language: string;
  theme: 'light' | 'dark';
  emailNotifications: boolean;
  pushNotifications: boolean;
}

// 道場メンバーシップ関連の型定義
export interface Membership {
  id: string;
  userId: string;
  dojoId: string;
  status: 'active' | 'inactive' | 'pending';
  startDate: Date;
  endDate?: Date;
}

// 出席記録関連の型定義
export interface Attendance {
  id: string;
  userId: string;
  trainingId: string;
  status: 'present' | 'absent' | 'late';
  date: Date;
}

// 評価・フィードバック関連の型定義
export interface Feedback {
  id: string;
  giverId: string;
  receiverId: string;
  trainingId?: string;
  content: string;
  rating: number;
  createdAt: Date;
}

// 武道スタイル関連の型定義
export interface MartialArtStyle {
  id: string;
  name: string;
  description: string;
  origin: string;
}

// 技術カテゴリ関連の型定義
export interface TechniqueCategory {
  id: string;
  name: string;
  description: string;
  parentCategoryId?: string;
}

// 怪我記���関連の型定義
export interface InjuryRecord {
  id: string;
  userId: string;
  description: string;
  date: Date;
  severity: 'minor' | 'moderate' | 'severe';
  status: 'active' | 'recovered';
  treatmentNotes: string;
}

// トーナメント関連の型定義
export interface Tournament {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  organizerId: string;
}

export interface TournamentParticipant {
  id: string;
  tournamentId: string;
  userId: string;
  category: string;
  result?: 'winner' | 'runner-up' | 'semi-finalist' | 'participant';
}

// 指導者スケジュール関連の型定義
export interface InstructorSchedule {
  id: string;
  instructorId: string;
  dojoId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
}

// 道場設備関連の型定義
export interface DojoFacility {
  id: string;
  dojoId: string;
  name: string;
  type: 'training-area' | 'changing-room' | 'equipment-storage' | 'other';
  capacity?: number;
  description?: string;
}

// 支払いプラン関連の型定義
export interface PaymentPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: 'monthly' | 'quarterly' | 'yearly';
  features: string[];
}

// ユーザーアクション履歴関連の型定義
export interface UserActionLog {
  id: string;
  userId: string;
  action: string;
  details: Record<string, any>;
  timestamp: Date;
}

// システム設定関連の型定義
export interface SystemConfig {
  maintenanceMode: boolean;
  allowNewRegistrations: boolean;
  maxUsersPerDojo: number;
  defaultLanguage: string;
  supportedLanguages: string[];
}

// API関連の追加型定義
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiEndpoint {
  path: string;
  method: HttpMethod;
  requiredRole?: 'student' | 'instructor' | 'admin';
}

// コンポーネント関連の型定義
export interface ComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface ButtonProps extends ComponentProps {
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export interface InputProps extends ComponentProps {
  type?: 'text' | 'number' | 'email' | 'password';
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

// エラー処理関連の型定義
export interface AppError extends Error {
  code?: string;
  details?: Record<string, any>;
}

// 状態管理関連の型定義
export interface AppState {
  auth: AuthState;
  currentDojo: Dojo | null;
  notifications: Notification[];
  systemConfig: SystemConfig;
}

export type AppAction =
  | { type: 'SET_AUTH'; payload: AuthState }
  | { type: 'SET_CURRENT_DOJO'; payload: Dojo | null }
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'UPDATE_SYSTEM_CONFIG'; payload: Partial<SystemConfig> };

// ユーザーの練習記録関連の型定義
export interface PracticeLog {
  id: string;
  userId: string;
  date: Date;
  duration: number; // 分単位
  techniques: string[]; // 練習した技術のID
  notes: string;
  mood: 'great' | 'good' | 'okay' | 'bad';
  createdAt: Date;
  updatedAt: Date;
}

// 道場の指導カリキュラム関連の型定義
export interface Curriculum {
  id: string;
  dojoId: string;
  name: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  techniques: string[]; // 含まれる技術のID
  estimatedDuration: number; // 週単位
  createdAt: Date;
  updatedAt: Date;
}

// ユーザーの進捗追跡関連の型定義
export interface UserProgress {
  id: string;
  userId: string;
  curriculumId: string;
  startDate: Date;
  completedTechniques: string[]; // 完了した技術のID
  currentLevel: 'beginner' | 'intermediate' | 'advanced';
  lastAssessmentDate?: Date;
  nextAssessmentDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// 道場の設備予約関連の型定義
export interface FacilityReservation {
  id: string;
  dojoId: string;
  facilityId: string;
  userId: string;
  startTime: Date;
  endTime: Date;
  purpose: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

// 指導者の評価関連の型定義
export interface InstructorRating {
  id: string;
  instructorId: string;
  studentId: string;
  rating: number;
  comment: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

// 道場間の提携関連の型定義
export interface DojoPartnership {
  id: string;
  dojo1Id: string;
  dojo2Id: string;
  startDate: Date;
  endDate?: Date;
  terms: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: Date;
  updatedAt: Date;
}

// 武道用語集関連の型定義
export interface MartialArtsTerm {
  id: string;
  term: string;
  definition: string;
  language: string;
  style?: string; // 特定の武道スタイルに関連する場合
  createdAt: Date;
  updatedAt: Date;
}

// ユーザーの目標達成記録関連の型定義
export interface GoalAchievement {
  id: string;
  userId: string;
  goalId: string;
  achievementDate: Date;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

// 道場のメンバーシッププラン関連の型定義
export interface MembershipPlan {
  id: string;
  dojoId: string;
  name: string;
  description: string;
  price: number;
  duration: 'monthly' | 'quarterly' | 'yearly' | 'lifetime';
  benefits: string[];
  createdAt: Date;
  updatedAt: Date;
}

// ユーザーのメンバーシップ購読関連の型定義
export interface MembershipSubscription {
  id: string;
  userId: string;
  planId: string;
  startDate: Date;
  endDate?: Date;
  status: 'active' | 'expired' | 'cancelled';
  autoRenew: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// 道場のニュースレター関連の型定義
export interface Newsletter {
  id: string;
  dojoId: string;
  title: string;
  content: string;
  publishDate: Date;
  recipients: string[]; // ユーザーIDのリスト
  createdAt: Date;
  updatedAt: Date;
}
